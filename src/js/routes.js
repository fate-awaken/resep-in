
import HomePage from '../pages/home.f7';
import ProfilePage from '../pages/profile.f7';
import EducationPage from '../pages/education.f7';
import SkillPage from '../pages/skill.f7';
import RefPage from '../pages/ref.f7';
import SocialPage from '../pages/social.f7';
import EmployPage from '../pages/employ.f7';
import Ref1Page from '../pages/detail_ref1.f7';
import Ref2Page from '../pages/detail_ref2.f7';
import Ref3Page from '../pages/detail_ref3.f7';
import Ref4Page from '../pages/detail_ref4.f7';


import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/education/',
    component: EducationPage,
  },
  {
    path: '/skill/',
    component: SkillPage,
  },
  {
    path: '/social/',
    component: SocialPage,
  },
  {
    path: '/employ/',
    component: EmployPage,
  },
  {
    path: '/ref/',
    component: RefPage,
  },
  {
    path: '/d_ref1/',
    component: Ref1Page,
  },
  {
    path: '/d_ref2/',
    component: Ref2Page,
  },
  {
    path: '/d_ref3/',
    component: Ref3Page,
  },
  {
    path: '/d_ref4/',
    component: Ref4Page,
  },
  
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;