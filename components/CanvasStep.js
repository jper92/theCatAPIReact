import { useRef, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';
import useImage from 'use-image';
import { catCanvasSelector } from 'store/selectors/catCanvas';
import { addCat } from 'store/reducers/catCanvas';
import { getCatId } from 'lib/catUtils';
import downloadUri from 'lib/downloadUri';
import CatOptions from './canvas/CatOptions';
import styles from './Step.module.css';

const UrlImage = ({ cat }) => {
  const [image] = useImage(cat.url);
  return (
    <Image
      image={image}
      x={cat.x}
      y={cat.y}
      width={100}
      height={100}
    />
  );
};

const CanvasStep = () => {
  const dispatch = useDispatch();
  const [draggedItem, setDraggedItem] = useState(null);
  const appCanvas = useSelector(catCanvasSelector);

  const stageRef = useRef(null);

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Cat collage creator
        </h1>
        <p>Now drag and drop your selected cats to the canvas</p>

        <div className={styles.row}>
          <CatOptions onDragStart={setDraggedItem} />
        </div>

        <div
          onDrop={(e) => {
            stageRef.current.setPointersPositions(e);
            dispatch(addCat({
              ...draggedItem,
              ...stageRef.current.getPointerPosition(),
            }));
          }}
          onDragOver={(e) => e.preventDefault()}
          style={{ border: 'solid 1px #000', margin: '10px' }}
        >
          <Stage
            width={1000}
            height={2000}
            ref={stageRef}
          >
            <Layer>
              {appCanvas.map((cat) => (
                <UrlImage key={getCatId(cat)} cat={cat} />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};

export default CanvasStep;
