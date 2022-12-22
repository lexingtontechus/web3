import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <div>
        Hello World. <Link href="/about"> About</Link>
      </div>
      <div>
        Hello World. <Link href="/web3">Web3</Link>
      </div>
    </>
  );
}
