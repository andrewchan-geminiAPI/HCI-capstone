import { useState } from 'react';
import DiscoverIntake from './DiscoverIntake';
import DiscoverMap from './DiscoverMap';

interface IntakeData {
  role: 'doctor' | 'designer' | 'engineer' | null;
  collaborationIntent: string[];
  topicArea: string[];
  skills: string[];
  location: string;
  availability: string;
  projectStage: string[];
}

export default function Discover() {
  const [stage, setStage] = useState<'intake' | 'map'>('intake');
  const [intakeData, setIntakeData] = useState<IntakeData | null>(null);

  const handleIntakeComplete = (data: IntakeData) => {
    setIntakeData(data);
    setStage('map');
  };

  const handleEditFilters = () => {
    setStage('intake');
  };

  if (stage === 'intake') {
    return <DiscoverIntake onComplete={handleIntakeComplete} />;
  }

  if (stage === 'map' && intakeData) {
    return <DiscoverMap intakeData={intakeData} onEditFilters={handleEditFilters} />;
  }

  return null;
}
