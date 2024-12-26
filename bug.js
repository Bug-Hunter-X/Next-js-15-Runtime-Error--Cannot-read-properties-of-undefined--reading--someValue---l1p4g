```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you don't handle it
  return (
    <div>
      <h1>About Page</h1>
      {/* This will cause a runtime error if this.props.someValue is not defined*/}
       <p>{JSON.stringify(this.props)}</p>
    </div>
  );
}
```