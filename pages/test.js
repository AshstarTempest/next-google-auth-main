import { getSession, session } from 'next-auth/client';
import styles from '../styles/Home.module.css';

export default function Homescreen({ user }) {
  return (

    <div className={styles.container}>
      <form action="/action_page.php">
        <label span="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John"/>
        <label span="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe"/>
        <input type="submit" value="Submit"/>
    </form> 
        

      <p>{user.email}</p>

    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
