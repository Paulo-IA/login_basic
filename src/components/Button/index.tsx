import * as C from './styles'

type Props = {
    message: string,
    clickFn: () => void
}

export const Button = ({ message, clickFn }: Props) => {
    
const handleClick = () => {
        clickFn()
    }

    return (
        <C.Button onClick={handleClick}>{message}</C.Button>
    )
}