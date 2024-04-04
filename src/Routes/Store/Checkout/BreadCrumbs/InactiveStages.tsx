import { capitaliseWords } from '../../../../Utils/Formatters/capitaliseWords';
import { checkoutStages } from './checkoutStages';

export const InactiveStages: React.FC<{ checkoutProgression: number }> = ({ checkoutProgression }) => {
  const inactive = checkoutStages.filter((stage) => stage.stageNumber > checkoutProgression);

  return (
    <>
      {inactive?.map((level, index) => (
        <li key={index}>
          <span className="text-secondary">{capitaliseWords(level.title)}</span>
        </li>
      ))}
    </>
  );
};
