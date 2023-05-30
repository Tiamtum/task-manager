import Draggable from 'react-draggable';
//https://github.com/react-grid-layout/react-draggable

export default function DashBoardPage()
{
    return(
        <div>
            <h1>Testing Draggable Windows!</h1>
            <Draggable handle="strong">
                <div className="box no-cursor">
                    <strong className="cursor">Drag Here</strong>
                    <div>You must click my handle to drag me</div>
                </div>
            </Draggable>
        </div>
    );
}