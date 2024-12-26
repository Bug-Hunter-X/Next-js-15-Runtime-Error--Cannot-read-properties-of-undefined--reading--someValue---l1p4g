```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  // Access props using optional chaining
  return (
    <div>
      <h1>About Page</h1>
      <p>{JSON.stringify(router.query)}</p> 
    </div>
  );
}
```