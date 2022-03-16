import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

import { firebaseConfig } from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logPage = (componentName: string, pageName: string) => {
  logEvent(analytics, 'screen_view', {
    firebase_screen: pageName, 
    firebase_screen_class: componentName
  });
};

