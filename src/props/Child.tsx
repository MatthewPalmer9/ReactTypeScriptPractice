interface ChildProps {
    color: string
    onClick: () => void;
}

/**
 * We structure our components like this (compared to below example commented out) so
 * that we can: 1. Have access to React properties such as propTypes and contextTypes.
 * and 2. Optionally pass in children. e.g. <Child> example child text </Child>.
 * 
 * React.FC (short version of React.FunctionComponent) is what gives us those properties
 * while enforcing our incoming props are the correct type via the interface ChildProps
 */
export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
        My favorite color is: {color}.
        <button onClick={onClick}>Click me</button>
    </div>
}

// export const Child = ({ color, onClick }: ChildProps) => {
//     return <div>
//         My favorite color is: {color}.
//         <button onClick={onClick}>Click me</button>
//     </div>
// }

