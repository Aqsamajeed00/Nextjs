import Image from "next/image";
import Link from "next/link"

export default function Home() {
  let age: number = 18
  return (
    <> 
    <Link href="/about">About</Link><br />
    <Link href="/">Home</Link>
    {/* <a href="/about">About</a> */}
    <h1>Hello World {age}</h1>
    <br />
    <h2>from GIAIC</h2>
    <h2>Full Stack Web Developer</h2>
    </>
  );
}
