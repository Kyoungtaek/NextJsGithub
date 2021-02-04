import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  //const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  //const router = useRouter();
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>Search</a>
      </Link>
      {/* <img src="/cheese.jpg" alt="Cheese" />
      <button type="button" onClick={() => router.push('/tomato')}>
        Tomato
      </button>
      <p>Name</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '12px' }}
      />
      <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
        Name으로 고고
      </button>

      <h2>Link to 'potato' Page</h2>
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>
      */}
    </div>
  );
};

export default App;
