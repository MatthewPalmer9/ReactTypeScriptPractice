import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 24 },
    { name: 'Michael', age: 22 }
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    useEffect(() => {
        inputRef?.current?.focus()
    }, []);
    
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return (
        <>
            <div>User Search</div>
            <div>
                {user?.name}
                {user?.age}
            </div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
        </>
    )
}

export default UserSearch;