import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

interface SvgProps {
  className?: string;
}

const Icon: React.FC<SvgProps> = props => {
  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props}>
      <path d="M378.1 14.21c-2.68 2.49-4.79 5.75-4.79 7.09 0 1.34 2.11 17.63 4.79 36.03 10.73 77.81 13.61 154.29 7.67 206.03-10.16 86.44-40.83 172.12-89.89 251.65-15.91 25.68-37.95 54.82-54.05 71.11-15.91 16.29-13.99 16.1-46.19 5.94-24.53-7.86-42.16-10.16-65.74-9.01C67.42 586.31 29.28 621 13.56 688.85c-5.17 22.42-4.6 67.85.96 94.3 13.61 63.05 47.91 124.19 93.91 167.7 23.19 21.66 38.91 31.24 60.76 37.18 13.22 3.64 23.57 3.26 47.91-1.15 24.92-4.6 36.8-4.79 58.46-.96 23.19 4.02 43.12 3.64 53.47-.96 31.43-14.37 71.87-58.26 94.68-102.92 21.66-42.55 32.01-85.48 32.01-133.39 0-55.77-15.91-98.89-49.26-133.59-27.41-28.75-57.11-38.52-98.32-32.58-6.71.96-12.65 1.34-13.03.96-.58-.38 2.49-4.98 6.71-9.97 48.68-58.84 97.17-170.39 114.42-262.96 13.8-73.21 13.8-170.96 0-245.13l-1.15-6.33 17.82 10.93c53.28 32.2 136.27 120.74 181.31 193.38 34.5 55.58 61.14 115.19 86.82 193.58 17.83 54.81 37.57 136.65 33.74 140.29-.38.58-7.86-1.34-16.29-4.22-74.17-24.72-134.93-4.41-172.49 57.5-8.05 13.03-18.21 39.86-22.62 58.84-4.98 21.47-4.41 71.3.96 96.59 19.36 90.46 75.51 163.49 136.65 178.05 16.87 3.83 43.12 3.64 65.93-.96 19.17-3.64 19.17-3.64 38.33.38 33.35 6.9 62.1 2.88 93.91-12.84 48.11-23.57 89.5-74.17 113.08-137.99 43.89-118.25 3.83-224.81-91.61-244.56-31.05-6.32-51.56-4.98-88.16 6.33-10.35 3.07-18.98 5.37-19.36 4.98-.19-.19-2.3-13.03-4.79-28.17-15.14-95.64-56.54-203.35-117.49-305.89-27.41-46.19-57.69-86.44-93.72-124.39-10.92-11.69-18.21-20.32-16.1-19.55 12.65 4.79 51.36 14.76 71.87 18.4 33.92 6.13 95.64 7.47 129.75 2.88 31.05-4.22 68.42-13.22 75.51-18.4 3.07-2.11 5.56-5.56 5.56-7.47 0-4.98-18.4-24.34-35.07-36.99-52.9-40.06-130.52-63.82-195.88-59.99-11.5.77-33.16 3.07-47.92 5.37-31.05 4.79-69.19 5.56-91.04 1.72-23.19-4.02-42.55-9.2-50.79-13.42-10.33-5.54-19.15-5.16-24.9.78z" />
    </SvgIcon>
  );
};

export default Icon;