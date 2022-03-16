/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

import { firebaseConfig } from './firebase-config';

let analytics: any = null;

const initFirebase = () => {
  if (typeof window !== 'undefined' && !analytics) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  }
};

export const logPage = (componentName: string, pageName: string) => {
  initFirebase();
  logEvent(analytics, 'screen_view', {
    firebase_screen: pageName, 
    firebase_screen_class: componentName
  });
};


