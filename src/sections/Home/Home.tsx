import React from 'react';
import classes from './Home.module.scss';

const Home: React.FC = (props: any) => {
    return (<div className={classes.Section}>
        <h2>Cras id consequat ex</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nibh in est fringilla rutrum. Nulla at mollis leo. Quisque vehicula pharetra diam, eget fringilla dui malesuada et. Donec interdum in dui eu luctus. Quisque tristique quam non arcu fringilla elementum. Nunc congue lacus eu nulla elementum, eu sagittis sapien fermentum. Praesent faucibus, massa eget efficitur volutpat, magna metus porta tortor, at mollis arcu arcu sed ante. Aenean tellus erat, commodo ac nisl ut, euismod pellentesque urna. Vivamus purus sapien, pellentesque id ornare ac, fringilla pretium erat. Praesent sit amet diam at risus commodo viverra in vel orci. Morbi hendrerit luctus odio vel porta. Nam molestie est at arcu sodales, euismod laoreet libero ullamcorper.</p>
        <p>Vestibulum at nisl elementum, elementum justo eu, auctor lectus. Cras id consequat ex, eget efficitur risus. Pellentesque diam urna, semper eget dictum et, viverra in felis. Maecenas at sapien a ante fringilla faucibus. Integer convallis semper ligula, eget lacinia felis faucibus non. Proin vitae laoreet dui, in imperdiet nisl. Curabitur euismod cursus quam a sodales. Suspendisse a ante a quam efficitur fringilla. Nunc dapibus efficitur mattis. Suspendisse id elit mauris.</p>
        <p>Nullam eleifend ornare dignissim. Pellentesque a luctus mauris, sed tempor sem. Praesent feugiat suscipit enim, nec pellentesque arcu condimentum sed. Cras a elit eu magna varius rutrum. Maecenas id facilisis nulla. Vivamus pretium lorem vitae odio aliquet, at euismod neque feugiat. Suspendisse potenti. Donec a suscipit ipsum. Nunc malesuada, purus vitae blandit efficitur, nisi nisl luctus dolor, eget sodales elit ipsum lobortis mi. Etiam tincidunt mi sit amet magna suscipit, ut sollicitudin leo maximus. Sed varius erat sit amet blandit euismod.</p>
    </div>);
};

export default Home;