import { Card } from "antd"

interface MainCardProps {
    className?: string;
    content?: string
}

function MainCard({ 
    className,
    content
 }: MainCardProps){
    return(
        <>
            <Card className={className}>
                <p>{content}</p>
            </Card>
        </>
    )
}

export default MainCard;