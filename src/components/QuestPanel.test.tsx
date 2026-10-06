import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuestPanel } from './QuestPanel';
import { useAppStore } from '../store/appStore';
import { quests as staticQuests, type Quest } from '../data/quests';

// A GENERATED-style quest: same id as a static quest but produced by
// questGenerator for some loaded ontology. Reference identity (not id)
// must decide whether dictionary lookups apply.
const generatedQuest: Quest = {
  id: 'quest-1',
  title: 'Generated: explore things',
  description: 'A generated quest for a loaded ontology',
  difficulty: 'beginner',
  category: 'exploration',
  steps: [
    { id: 'step-1-1', instruction: 'Click the Widget entity', targetType: 'entity', targetId: 'widget', hint: 'Look for the 📦 icon' },
  ],
  reward: { badge: 'Widget Wrangler', badgeIcon: '🏅', points: 10 },
};

describe('QuestPanel i18n guard', () => {
  beforeEach(() => {
    useAppStore.setState({
      availableQuests: [generatedQuest],
      activeQuest: generatedQuest,
      currentStepIndex: 0,
      completedQuests: [],
      earnedBadges: [],
      totalPoints: 0,
    });
    useAppStore.getState().setLanguage('zh-CN');
  });

  afterEach(() => {
    useAppStore.getState().setLanguage('en');
  });

  it('renders generated quest text as-is despite id collision with static quests', () => {
    render(<QuestPanel />);
    // The title renders TWICE (active-quest panel + quest-list card) — use
    // getAllByText, getByText would throw "Found multiple elements".
    expect(screen.getAllByText('Generated: explore things')).toHaveLength(2);
    expect(screen.getByText('Click the Widget entity')).toBeInTheDocument();
    // Static quest-1's zh title ("Meet the Entities" → 认识实体, seeded in
    // step 3a) must NOT leak into a generated quest just because the ids
    // collide — this is the assertion an id-based (wrong) guard would fail.
    expect(screen.queryByText('认识实体')).not.toBeInTheDocument();
  });

  it('localizes panel chrome to Chinese', () => {
    render(<QuestPanel />);
    expect(screen.getByText('任务')).toBeInTheDocument();   // panel title
    expect(screen.getByText('放弃')).toBeInTheDocument();   // Abandon
  });

  it('renders Chinese for static quests (guard positive direction)', () => {
    // Reference identity preserved: setState with the imported array itself.
    const [first] = staticQuests;
    useAppStore.setState({
      availableQuests: [first],
      activeQuest: first,
      currentStepIndex: 0,
      completedQuests: [],
    });
    render(<QuestPanel />);
    // title renders twice (active panel + list card)
    expect(screen.getAllByText('认识实体')).toHaveLength(2);
    expect(screen.getByText('点击 Customer 实体，了解顾客的相关信息')).toBeInTheDocument();
  });
});
