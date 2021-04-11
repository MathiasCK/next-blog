import classes from "./styles/layout.module.css";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
          <div className={classes.border}></div>
        </li>

        <div className={classes.relative}>
          <li>
            <Link href="/contact">Contact</Link>
            <div className={classes.border}></div>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
