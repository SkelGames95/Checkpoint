export const Buttons = ({ onClick, value }) => {
    return (
        <div>
            <button type="submit" disabled={!value.password || !value.username}>Login</button>
            <button type="reset" onClick={onClick} disabled={!value.password && !value.username}>Reset</button>
        </div>
    )
}