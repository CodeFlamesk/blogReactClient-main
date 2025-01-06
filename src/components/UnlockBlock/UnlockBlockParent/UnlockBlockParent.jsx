
import "./unlock-block-parent.scss"
import Container from "components/Container/Container"

const UnlockBlockParent = ({
    children
}) => {
    return (
            <Container>
                <div className="main-future__body">
                    {children}
                </div>
            </Container>
    )
}

export default UnlockBlockParent