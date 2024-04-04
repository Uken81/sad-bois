import { Link } from 'react-router-dom';
import { useGetLocationsCheckoutStage } from '../../../../Hooks/useGetLocationsCheckoutStage';
import { capitaliseWords } from '../../../../Utils/Formatters/capitaliseWords';
import { checkoutStages } from './checkoutStages';

export const ActiveStages: React.FC<{ checkoutProgression: number }> = ({ checkoutProgression }) => {
  const locationsCheckoutStage = useGetLocationsCheckoutStage();

  const active = checkoutStages.filter((stage) => stage.stageNumber <= checkoutProgression);

  return (
    <>
      {active?.map((stage, index) => {
        const isCurrentStage = stage.stageNumber === locationsCheckoutStage;
        const currentStageStyles = 'font-bold pointer-events-none text-base';
        const className = `text-white ${isCurrentStage ? currentStageStyles : ''}`;
        const text = capitaliseWords(stage.title);

        return (
          <li key={index}>
            <Link to={stage.urlkey} className={className}>
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};
