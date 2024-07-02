//ví dụ về button "go to top"
// 1. useEffect(callback) 
// - gọi callback mỗi khi component re-render / đúng trong cả 3 trhop
// - gọi callback sau khi component thêm element vào DOM 
// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau kih Component mouted
// 3. useEffect(callback, [depencency])
// - callback sẽ được gọi lại mỗi khi depencency thay đổi
import { Component, useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']

function ContentEffect() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    //thằng này chạy sau return
    useEffect(() => {
        // document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            // if(window.scrollY >= 200) {
            //     setShowGoToTop(true)
            // } else {
            //     setShowGoToTop(false)
            // }

            //cách viết tắt cho đoạn code trên
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        //cleanup function - dọn dẹp bộ nhớ bị rò rỉ
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    
    return(
        <div>
            {tabs.map(tab => (
                <button 
                key={tab}
                style={type === tab ? {
                    color: '#fff',
                    background: '#333'
                } : {}}
                onClick={() => setType(tab)}
                >
                {tab}
                </button>
            ))}
            
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}>
                    Go To Top
                </button>
            )}
        </div>

    );
}

export default ContentEffect;

