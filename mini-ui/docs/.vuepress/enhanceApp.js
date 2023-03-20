import MiniUI from '../../packages';

export default async ({ Vue }) => {
  if (typeof process === 'undefined') { 
    Vue.use(MiniUI);
  }
};
