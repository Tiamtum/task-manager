export default function ColoredLine({color})
{
    return(
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
            }}
        />
    );
}