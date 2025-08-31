import { Card } from "antd"

interface MainCardProps {
    className?: string;
    content?: string | React.ReactNode | React.ReactElement
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