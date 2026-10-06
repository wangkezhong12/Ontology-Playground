// Dynamic Quest Generator - Creates quests based on the loaded ontology

import type { Ontology } from './ontology';
import type { Quest, QuestStep } from './quests';
// Cycle guard: importing t() here creates appStore → questGenerator → i18n →
// appStore. It stays benign ONLY because every t() call below sits inside
// generateQuestsForOntology's body — the i18n store is read at call time
// (generation time), never at module evaluation. Generated strings then
// freeze at the language active when loadOntology ran (spec: no
// re-translation on toggle for in-flight generated quests).
import { t } from '../i18n';

/**
 * Generates a set of quests dynamically based on the current ontology structure.
 * Quests adapt to entity types, relationships, and properties in the loaded ontology.
 */
export function generateQuestsForOntology(ontology: Ontology): Quest[] {
  const quests: Quest[] = [];
  const entities = ontology.entityTypes;
  const relationships = ontology.relationships;

  // Quest 1: Meet the Entities (always generated)
  if (entities.length >= 2) {
    const explorationSteps: QuestStep[] = entities.slice(0, Math.min(4, entities.length)).map((entity, index) => ({
      id: `step-1-${index + 1}`,
      instruction: t('questGen.q1.clickEntity', { name: entity.name }),
      targetType: 'entity' as const,
      targetId: entity.id,
      hint: t('questGen.q1.iconInGraph', { icon: entity.icon })
    }));

    quests.push({
      id: "quest-1",
      title: t('questGen.q1.title'),
      description: t('questGen.q1.description', { name: ontology.name }),
      difficulty: "beginner",
      category: "exploration",
      steps: explorationSteps,
      reward: {
        badge: t('questGen.q1.badge'),
        badgeIcon: "🎖️",
        points: 100
      }
    });
  }

  // Quest 2: Relationship Navigator
  if (relationships.length >= 2) {
    const relSteps: QuestStep[] = [];
    const usedEntities = new Set<string>();

    // Try to find a chain of relationships
    for (const rel of relationships.slice(0, 3)) {
      const sourceEntity = entities.find(e => e.id === rel.from);
      const targetEntity = entities.find(e => e.id === rel.to);

      if (sourceEntity && !usedEntities.has(sourceEntity.id)) {
        relSteps.push({
          id: `step-2-${relSteps.length + 1}`,
          instruction: t('questGen.q2.startAt', { name: sourceEntity.name }),
          targetType: 'entity',
          targetId: sourceEntity.id,
          hint: t('questGen.findIcon', { icon: sourceEntity.icon })
        });
        usedEntities.add(sourceEntity.id);
      }

      relSteps.push({
        id: `step-2-${relSteps.length + 1}`,
        instruction:
          t('questGen.q2.followRel', { rel: rel.name }) +
          (targetEntity ? t('questGen.toSuffix', { target: targetEntity.name }) : ''),
        targetType: 'relationship',
        targetId: rel.id,
        hint: t('questGen.q2.clickLine', { rel: rel.name })
      });
    }

    if (relSteps.length >= 2) {
      quests.push({
        id: "quest-2",
        title: t('questGen.q2.title'),
        description: t('questGen.q2.description', { name: ontology.name }),
        difficulty: "intermediate",
        category: "traversal",
        steps: relSteps,
        reward: {
          badge: t('questGen.q2.badge'),
          badgeIcon: "🔗",
          points: 200
        }
      });
    }
  }

  // Quest 3: Find the Hub - identify the most connected entity
  const connectionCount: Record<string, number> = {};
  for (const entity of entities) {
    connectionCount[entity.id] = relationships.filter(
      r => r.from === entity.id || r.to === entity.id
    ).length;
  }

  const sortedByConnections = entities
    .map(e => ({ entity: e, connections: connectionCount[e.id] || 0 }))
    .sort((a, b) => b.connections - a.connections);

  if (sortedByConnections.length >= 2 && sortedByConnections[0].connections >= 2) {
    const hub = sortedByConnections[0].entity;
    const connectedRels = relationships.filter(
      r => r.from === hub.id || r.to === hub.id
    ).slice(0, 3);

    const hubSteps: QuestStep[] = [
      {
        id: "step-3-1",
        instruction: t('questGen.q3.findHub', { name: hub.name }),
        targetType: 'entity',
        targetId: hub.id,
        hint: t('questGen.q3.connectionCount', { name: hub.name, count: connectionCount[hub.id] })
      }
    ];

    connectedRels.forEach((rel, i) => {
      hubSteps.push({
        id: `step-3-${i + 2}`,
        instruction: t('questGen.q3.exploreRel', { rel: rel.name }),
        targetType: 'relationship',
        targetId: rel.id,
        hint: t('questGen.q3.hubRelHint', {
          phrase: rel.from === hub.id ? t('questGen.originatesFrom') : t('questGen.connectsTo'),
          name: hub.name
        })
      });
    });

    quests.push({
      id: "quest-3",
      title: t('questGen.q3.title'),
      description: t('questGen.q3.description', { name: ontology.name }),
      difficulty: "intermediate",
      category: "exploration",
      steps: hubSteps,
      reward: {
        badge: t('questGen.q3.badge'),
        badgeIcon: "🔍",
        points: 200
      }
    });
  }

  // Quest 4: Property Detective - explore entity properties
  const entitiesWithManyProps = entities
    .filter(e => e.properties.length >= 3)
    .slice(0, 2);

  if (entitiesWithManyProps.length >= 1) {
    const propSteps: QuestStep[] = [];

    for (const entity of entitiesWithManyProps) {
      propSteps.push({
        id: `step-4-${propSteps.length + 1}`,
        instruction: t('questGen.q4.selectEntity', { name: entity.name, count: entity.properties.length }),
        targetType: 'entity',
        targetId: entity.id,
        hint: t('questGen.q4.inspectorHint')
      });

      const identifierProp = entity.properties.find(p => p.isIdentifier);
      if (identifierProp) {
        propSteps.push({
          id: `step-4-${propSteps.length + 1}`,
          instruction: t('questGen.q4.findIdentifier', { prop: identifierProp.name, name: entity.name }),
          targetType: 'property',
          targetId: identifierProp.name,
          hint: t('questGen.q4.keyIconHint')
        });
      }
    }

    quests.push({
      id: "quest-4",
      title: t('questGen.q4.title'),
      description: t('questGen.q4.description'),
      difficulty: "intermediate",
      category: "exploration",
      steps: propSteps,
      reward: {
        badge: t('questGen.q4.badge'),
        badgeIcon: "📊",
        points: 250
      }
    });
  }

  // Quest 5: Query Explorer (always available)
  const sampleEntities = entities.slice(0, 2);
  const querySteps: QuestStep[] = [
    {
      id: "step-5-1",
      instruction: t('questGen.q5.tryAsking', { name: sampleEntities[0]?.name || 'an entity' }),
      targetType: 'query',
      hint: t('questGen.q5.queryHint')
    }
  ];

  if (sampleEntities.length >= 2) {
    querySteps.push({
      id: "step-5-2",
      instruction: t('questGen.q5.nowAsk', { a: sampleEntities[0].name, b: sampleEntities[1].name }),
      targetType: 'query',
      hint: t('questGen.q5.exploreRelsHint')
    });
  }

  if (relationships.length > 0) {
    const rel = relationships[0];
    const fromEntity = entities.find(e => e.id === rel.from);
    const toEntity = entities.find(e => e.id === rel.to);
    querySteps.push({
      id: "step-5-3",
      instruction: fromEntity && toEntity
        ? t('questGen.q5.traversalQuery', { a: fromEntity.name, b: toEntity.name })
        : t('questGen.q5.traversalAboutRel', { rel: rel.name }),
      targetType: 'query',
      hint: t('questGen.q5.relPathHint', { rel: rel.name })
    });
  }

  quests.push({
    id: "quest-5",
    title: t('questGen.q5.title'),
    description: t('questGen.q5.description'),
    difficulty: "advanced",
    category: "query",
    steps: querySteps,
    reward: {
      badge: t('questGen.q5.badge'),
      badgeIcon: "🧙",
      points: 300
    }
  });

  // Quest 6: Full Traversal - go through a chain of entities
  if (relationships.length >= 3) {
    // Try to find a chain: A -> B -> C
    let chain: { entities: typeof entities[0][], rels: typeof relationships[0][] } | null = null;

    for (const startRel of relationships) {
      const midEntity = entities.find(e => e.id === startRel.to);
      if (!midEntity) continue;

      const nextRel = relationships.find(r => r.from === midEntity.id && r.id !== startRel.id);
      if (!nextRel) continue;

      const endEntity = entities.find(e => e.id === nextRel.to);
      if (!endEntity) continue;

      const startEntity = entities.find(e => e.id === startRel.from);
      if (!startEntity) continue;

      chain = {
        entities: [startEntity, midEntity, endEntity],
        rels: [startRel, nextRel]
      };
      break;
    }

    if (chain) {
      const chainSteps: QuestStep[] = [
        {
          id: "step-6-1",
          instruction: t('questGen.q6.startJourney', { name: chain.entities[0].name }),
          targetType: 'entity',
          targetId: chain.entities[0].id,
          hint: t('questGen.findIcon', { icon: chain.entities[0].icon })
        },
        {
          id: "step-6-2",
          instruction: t('questGen.q6.followToReach', { rel: chain.rels[0].name, name: chain.entities[1].name }),
          targetType: 'relationship',
          targetId: chain.rels[0].id,
          hint: t('questGen.q6.clickEdge')
        },
        {
          id: "step-6-3",
          instruction: t('questGen.q6.exploreEntity', { name: chain.entities[1].name }),
          targetType: 'entity',
          targetId: chain.entities[1].id,
          hint: t('questGen.q6.middleHint')
        },
        {
          id: "step-6-4",
          instruction: t('questGen.q6.continueVia', { rel: chain.rels[1].name, name: chain.entities[2].name }),
          targetType: 'relationship',
          targetId: chain.rels[1].id,
          hint: t('questGen.q6.oneMoreHint')
        },
        {
          id: "step-6-5",
          instruction: t('questGen.q6.youMadeIt', { name: chain.entities[2].name }),
          targetType: 'entity',
          targetId: chain.entities[2].id,
          hint: t('questGen.q6.journeyCompleteHint', { icon: chain.entities[2].icon })
        }
      ];

      quests.push({
        id: "quest-6",
        title: t('questGen.q6.title'),
        description: t('questGen.q6.description', { a: chain.entities[0].name, b: chain.entities[2].name }),
        difficulty: "advanced",
        category: "traversal",
        steps: chainSteps,
        reward: {
          badge: t('questGen.q6.badge'),
          badgeIcon: "🗺️",
          points: 350
        }
      });
    }
  }

  return quests;
}

/**
 * Get a domain-specific badge icon based on ontology category/name
 */
export function getOntologyThemeIcon(ontologyName: string): string {
  const name = ontologyName.toLowerCase();
  if (name.includes('health') || name.includes('medical') || name.includes('patient')) return '🏥';
  if (name.includes('commerce') || name.includes('retail') || name.includes('shop')) return '🛒';
  if (name.includes('bank') || name.includes('financ')) return '🏦';
  if (name.includes('manufactur') || name.includes('factory') || name.includes('production')) return '🏭';
  if (name.includes('university') || name.includes('education') || name.includes('school')) return '🎓';
  if (name.includes('coffee') || name.includes('cosmic')) return '☕';
  return '🔷';
}
