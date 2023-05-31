export default function ListItem({task})
{
    console.log("list item render")
    return(
        <div>
            {task.taskName + ", "}
            {task.shortDesc + ", "}
            {task.longDesc + ", "}
            {task.priority + ", "}
            {task.due + ", "}
            {task.tags + " " }
        </div>
    );
}