import { Button } from'../Button/Button';
import './Blocks.css';
const countBlocks = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export const Blocks = () => {

  return (
    <main className='main'>
      {countBlocks.map(el => (
        <div className='block' key={el.id}>
          {el.id === 1 ? (
          <Button />
          ) : (
            <div className="placeholder-button">
            </div>
          )}
        </div>
      ))}
    </main>
  );
};
