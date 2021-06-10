import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExistingCanvas from "./Components/ExistingCanvas";
import BlankCanvasWrapper from "./Components/BlankCanvasWrapper";
import NotFoundPage from "./Components/NotFoundPage";

import Logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <Router>
        <header className="header">
          <Link to="/">
            <svg id="logo" className="logo" aria-labelledby="logoTitle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 53">
              <title id="logoTitle">Date painter logo</title>
              <defs>
                <clipPath id="_clipPath_6r2SoGTZl89k8dITc7wLZ9DmDHzP7Mww">
                  <rect width="145" height="53" />
                </clipPath>
              </defs>
              <g clipPath="url(#_clipPath_6r2SoGTZl89k8dITc7wLZ9DmDHzP7Mww)">
                <path d="M23.88 35.04L20.19 38.73 32.08 50.63C32.59 51.14 33.29 51.45 33.97 51.45L33.97 51.45C34.64 51.45 35.26 51.14 35.77 50.63L50.62 35.78C51.12 35.29 51.39 34.62 51.39 33.93 51.39 33.24 51.12 32.57 50.62 32.08L38.73 20.19 35.03 23.88 39.63 28.47C37.83 28.08 36.21 28.09 35.77 28.39 33.01 30.28 41.34 35.08 38.24 36.27 37.8 36.43 36.96 36.34 35.77 35.78 33.25 34.59 31.38 34.46 30.69 35.45 29.88 36.59 33.47 40.05 30.19 41.35L23.88 35.04Z" vectorEffect="non-scaling-stroke" className="logo-parts-1" />
                <path d="M16.98 35.53L12.14 30.69C11.16 29.71 10.61 28.38 10.61 26.99 10.61 25.61 11.16 24.28 12.14 23.3L14.11 21.25C15.11 20.25 14.17 18.68 13.21 17.64 12.49 16.85 11.7 16.06 11.16 15.84 9.11 14.97 6.18 13.56 3.78 11.16 0.19 7.57-1.06 3.04 0.99 0.99 3.04-1.06 7.57 0.19 11.16 3.78 13.56 6.18 16.12 10.08 16.98 12.14 17.21 12.69 18.01 13.47 18.79 14.2 19.82 15.15 20.27 15.11 21.25 14.11L23.3 12.14C24.28 11.16 25.61 10.61 27 10.61 28.38 10.61 29.71 11.16 30.69 12.14L35.53 16.99 16.98 35.53ZM6.57 9.19C7.24 9.19 7.94 8.97 8.45 8.46 9.48 7.43 9.48 5.71 8.45 4.68 7.4 3.66 5.73 3.66 4.68 4.68 3.65 5.73 3.65 7.41 4.68 8.46 5.19 8.97 5.89 9.19 6.57 9.19Z" className="logo-parts-2" />
                <path d="M56.79 48.96L60.41 48.96 60.41 32.64 56.79 32.64 56.79 48.96ZM69.43 38.18L69.43 38.18 69.43 38.18Q69.43 36.22 68.68 34.9L68.68 34.9 68.68 34.9Q67.92 33.58 66.72 32.92L66.72 32.92 66.72 32.92Q65.52 32.26 64.18 32.26L64.18 32.26 64.18 32.26Q63.1 32.26 62.23 32.68L62.23 32.68 62.23 32.68Q61.37 33.1 60.77 33.88L60.77 33.88 60.77 33.88Q60.17 34.66 59.86 35.74L59.86 35.74 59.86 35.74Q59.55 36.82 59.55 38.16L59.55 38.16 59.55 38.16Q59.55 39.5 59.86 40.58L59.86 40.58 59.86 40.58Q60.17 41.66 60.77 42.44L60.77 42.44 60.77 42.44Q61.37 43.22 62.23 43.63L62.23 43.63 62.23 43.63Q63.1 44.04 64.18 44.04L64.18 44.04 64.18 44.04Q65.52 44.04 66.72 43.38L66.72 43.38 66.72 43.38Q67.92 42.72 68.68 41.42L68.68 41.42 68.68 41.42Q69.43 40.13 69.43 38.18ZM65.59 38.16L65.59 38.16 65.59 38.16Q65.59 39.02 65.23 39.62L65.23 39.62 65.23 39.62Q64.87 40.22 64.29 40.54L64.29 40.54 64.29 40.54Q63.7 40.85 62.95 40.85L62.95 40.85 62.95 40.85Q62.52 40.85 62.07 40.68L62.07 40.68 62.07 40.68Q61.61 40.51 61.24 40.18L61.24 40.18 61.24 40.18Q60.87 39.84 60.64 39.34L60.64 39.34 60.64 39.34Q60.41 38.83 60.41 38.18L60.41 38.18 60.41 38.18Q60.41 37.49 60.64 36.98L60.64 36.98 60.64 36.98Q60.87 36.48 61.24 36.13L61.24 36.13 61.24 36.13Q61.61 35.78 62.07 35.63L62.07 35.63 62.07 35.63Q62.52 35.47 62.98 35.47L62.98 35.47 62.98 35.47Q63.7 35.47 64.29 35.78L64.29 35.78 64.29 35.78Q64.87 36.1 65.23 36.7L65.23 36.7 65.23 36.7Q65.59 37.3 65.59 38.16ZM74.45 40.22L74.45 40.22 74.45 40.22Q74.45 39.79 74.63 39.53L74.63 39.53 74.63 39.53Q74.81 39.26 75.21 39.12L75.21 39.12 75.21 39.12Q75.6 38.98 76.22 38.98L76.22 38.98 76.22 38.98Q77.07 38.98 77.82 39.2L77.82 39.2 77.82 39.2Q78.58 39.43 79.15 39.86L79.15 39.86 79.15 38.26 79.15 38.26Q78.89 37.94 78.3 37.66L78.3 37.66 78.3 37.66Q77.71 37.37 76.9 37.19L76.9 37.19 76.9 37.19Q76.08 37.01 75.12 37.01L75.12 37.01 75.12 37.01Q73.68 37.01 72.73 37.4L72.73 37.4 72.73 37.4Q71.79 37.8 71.29 38.58L71.29 38.58 71.29 38.58Q70.8 39.36 70.8 40.42L70.8 40.42 70.8 40.42Q70.8 41.54 71.34 42.34L71.34 42.34 71.34 42.34Q71.88 43.13 72.77 43.52L72.77 43.52 72.77 43.52Q73.66 43.92 74.71 43.92L74.71 43.92 74.71 43.92Q75.77 43.92 76.69 43.55L76.69 43.55 76.69 43.55Q77.62 43.18 78.18 42.44L78.18 42.44 78.18 42.44Q78.75 41.71 78.75 40.66L78.75 40.66 78.36 39.22 78.36 39.22Q78.36 39.98 78.03 40.51L78.03 40.51 78.03 40.51Q77.69 41.04 77.16 41.3L77.16 41.3 77.16 41.3Q76.63 41.57 76.01 41.57L76.01 41.57 76.01 41.57Q75.58 41.57 75.22 41.4L75.22 41.4 75.22 41.4Q74.86 41.23 74.65 40.94L74.65 40.94 74.65 40.94Q74.45 40.66 74.45 40.22ZM71.59 33.58L72.82 36.02 72.82 36.02Q73.03 35.88 73.57 35.65L73.57 35.65 73.57 35.65Q74.11 35.42 74.83 35.26L74.83 35.26 74.83 35.26Q75.55 35.09 76.3 35.09L76.3 35.09 76.3 35.09Q76.8 35.09 77.19 35.18L77.19 35.18 77.19 35.18Q77.57 35.28 77.85 35.48L77.85 35.48 77.85 35.48Q78.12 35.69 78.24 36.01L78.24 36.01 78.24 36.01Q78.36 36.34 78.36 36.72L78.36 36.72 78.36 43.68 81.84 43.68 81.84 35.88 81.84 35.88Q81.84 34.75 81.17 33.96L81.17 33.96 81.17 33.96Q80.5 33.17 79.36 32.75L79.36 32.75 79.36 32.75Q78.22 32.33 76.73 32.33L76.73 32.33 76.73 32.33Q75.17 32.33 73.86 32.72L73.86 32.72 73.86 32.72Q72.55 33.12 71.59 33.58L71.59 33.58ZM88.2 32.64L84.67 32.64 84.67 43.68 88.2 43.68 88.2 32.64ZM98.38 36.96L98.38 36.96 98.38 43.68 102.17 43.68 102.17 36.58 102.17 36.58Q102.17 35.26 101.75 34.32L101.75 34.32 101.75 34.32Q101.33 33.38 100.45 32.88L100.45 32.88 100.45 32.88Q99.58 32.38 98.21 32.38L98.21 32.38 98.21 32.38Q97.01 32.38 96.17 32.88L96.17 32.88 96.17 32.88Q95.33 33.38 94.85 34.3L94.85 34.3 94.85 32.64 91.18 32.64 91.18 43.68 94.85 43.68 94.85 36.96 94.85 36.96Q94.85 36.34 95.09 35.87L95.09 35.87 95.09 35.87Q95.33 35.4 95.76 35.17L95.76 35.17 95.76 35.17Q96.19 34.94 96.77 34.94L96.77 34.94 96.77 34.94Q97.37 34.94 97.72 35.17L97.72 35.17 97.72 35.17Q98.07 35.4 98.22 35.86L98.22 35.86 98.22 35.86Q98.38 36.31 98.38 36.96ZM111.1 32.64L103.71 32.64 103.71 35.64 111.1 35.64 111.1 32.64ZM109.15 28.8L105.65 28.8 105.65 43.68 109.15 43.68 109.15 28.8ZM118.27 43.92L118.27 43.92 118.27 43.92Q120.39 43.92 121.85 43.1L121.85 43.1 121.85 43.1Q123.31 42.29 124.2 40.66L124.2 40.66 120.94 39.86 120.94 39.86Q120.55 40.58 119.86 40.94L119.86 40.94 119.86 40.94Q119.16 41.3 118.2 41.3L118.2 41.3 118.2 41.3Q117.39 41.3 116.8 40.92L116.8 40.92 116.8 40.92Q116.21 40.54 115.92 39.83L115.92 39.83 115.92 39.83Q115.63 39.12 115.66 38.11L115.66 38.11 115.66 38.11Q115.66 37.27 115.81 36.66L115.81 36.66 115.81 36.66Q115.97 36.05 116.28 35.64L116.28 35.64 116.28 35.64Q116.59 35.23 117.06 35.03L117.06 35.03 117.06 35.03Q117.53 34.82 118.15 34.82L118.15 34.82 118.15 34.82Q118.78 34.82 119.27 35.11L119.27 35.11 119.27 35.11Q119.76 35.4 120 35.92L120 35.92 120 35.92Q120.24 36.43 120.24 37.18L120.24 37.18 120.24 37.18Q120.24 37.34 120.17 37.57L120.17 37.57 120.17 37.57Q120.1 37.8 119.98 38.02L119.98 38.02 120.84 36.91 114.03 36.91 114.03 38.93 124.13 38.93 124.13 38.93Q124.15 38.74 124.15 38.5L124.15 38.5 124.15 38.5Q124.15 38.26 124.15 37.99L124.15 37.99 124.15 37.99Q124.15 36.22 123.46 34.97L123.46 34.97 123.46 34.97Q122.76 33.72 121.44 33.06L121.44 33.06 121.44 33.06Q120.12 32.4 118.2 32.4L118.2 32.4 118.2 32.4Q116.76 32.4 115.61 32.8L115.61 32.8 115.61 32.8Q114.46 33.19 113.64 33.94L113.64 33.94 113.64 33.94Q112.83 34.68 112.41 35.75L112.41 35.75 112.41 35.75Q111.99 36.82 111.99 38.16L111.99 38.16 111.99 38.16Q111.99 39.91 112.75 41.21L112.75 41.21 112.75 41.21Q113.52 42.5 114.93 43.21L114.93 43.21 114.93 43.21Q116.33 43.92 118.27 43.92ZM129.96 43.68L129.96 32.64 126.36 32.64 126.36 43.68 129.96 43.68ZM133.15 36.41L133.15 36.41 134.74 33.26 134.74 33.26Q134.47 32.9 133.91 32.64L133.91 32.64 133.91 32.64Q133.35 32.38 132.75 32.38L132.75 32.38 132.75 32.38Q131.81 32.38 130.98 32.98L130.98 32.98 130.98 32.98Q130.15 33.58 129.63 34.61L129.63 34.61 129.63 34.61Q129.1 35.64 129.1 36.96L129.1 36.96 129.96 38.23 129.96 38.23Q129.96 37.44 130.19 36.89L130.19 36.89 130.19 36.89Q130.42 36.34 130.82 36.06L130.82 36.06 130.82 36.06Q131.23 35.78 131.74 35.78L131.74 35.78 131.74 35.78Q132.22 35.78 132.54 35.95L132.54 35.95 132.54 35.95Q132.87 36.12 133.15 36.41Z" className="logo-parts-2" />
                <path d="M68.61 11.51L64.99 11.51 64.99 30.23 68.61 30.23 68.61 11.51ZM55.96 24.71L55.96 24.71 55.96 24.71Q55.96 26.55 56.71 27.85L56.71 27.85 56.71 27.85Q57.45 29.15 58.64 29.81L58.64 29.81 58.64 29.81Q59.83 30.47 61.2 30.47L61.2 30.47 61.2 30.47Q62.25 30.47 63.12 30.07L63.12 30.07 63.12 30.07Q63.98 29.67 64.64 28.93L64.64 28.93 64.64 28.93Q65.3 28.19 65.65 27.12L65.65 27.12 65.65 27.12Q66 26.05 66 24.71L66 24.71 66 24.71Q66 23.36 65.65 22.29L65.65 22.29 65.65 22.29Q65.3 21.23 64.65 20.48L64.65 20.48 64.65 20.48Q64 19.74 63.13 19.34L63.13 19.34 63.13 19.34Q62.25 18.95 61.2 18.95L61.2 18.95 61.2 18.95Q59.83 18.95 58.64 19.61L58.64 19.61 58.64 19.61Q57.45 20.27 56.71 21.55L56.71 21.55 56.71 21.55Q55.96 22.83 55.96 24.71ZM59.78 24.71L59.78 24.71 59.78 24.71Q59.78 23.84 60.14 23.21L60.14 23.21 60.14 23.21Q60.5 22.57 61.1 22.22L61.1 22.22 61.1 22.22Q61.7 21.87 62.42 21.87L62.42 21.87 62.42 21.87Q62.88 21.87 63.33 22.07L63.33 22.07 63.33 22.07Q63.79 22.26 64.16 22.62L64.16 22.62 64.16 22.62Q64.53 22.98 64.76 23.51L64.76 23.51 64.76 23.51Q64.99 24.03 64.99 24.71L64.99 24.71 64.99 24.71Q64.99 25.38 64.76 25.89L64.76 25.89 64.76 25.89Q64.53 26.41 64.16 26.78L64.16 26.78 64.16 26.78Q63.79 27.15 63.33 27.35L63.33 27.35 63.33 27.35Q62.88 27.54 62.44 27.54L62.44 27.54 62.44 27.54Q61.7 27.54 61.1 27.19L61.1 27.19 61.1 27.19Q60.5 26.84 60.14 26.21L60.14 26.21 60.14 26.21Q59.78 25.57 59.78 24.71ZM74.04 26.77L74.04 26.77 74.04 26.77Q74.04 26.34 74.22 26.07L74.22 26.07 74.22 26.07Q74.4 25.81 74.79 25.67L74.79 25.67 74.79 25.67Q75.19 25.52 75.81 25.52L75.81 25.52 75.81 25.52Q76.65 25.52 77.41 25.75L77.41 25.75 77.41 25.75Q78.17 25.98 78.74 26.41L78.74 26.41 78.74 24.8 78.74 24.8Q78.48 24.49 77.89 24.2L77.89 24.2 77.89 24.2Q77.3 23.91 76.49 23.73L76.49 23.73 76.49 23.73Q75.67 23.55 74.71 23.55L74.71 23.55 74.71 23.55Q73.27 23.55 72.32 23.95L72.32 23.95 72.32 23.95Q71.37 24.35 70.88 25.13L70.88 25.13 70.88 25.13Q70.39 25.91 70.39 26.96L70.39 26.96 70.39 26.96Q70.39 28.09 70.93 28.88L70.93 28.88 70.93 28.88Q71.47 29.67 72.36 30.07L72.36 30.07 72.36 30.07Q73.25 30.47 74.3 30.47L74.3 30.47 74.3 30.47Q75.36 30.47 76.28 30.09L76.28 30.09 76.28 30.09Q77.21 29.72 77.77 28.99L77.77 28.99 77.77 28.99Q78.33 28.26 78.33 27.2L78.33 27.2 77.95 25.76 77.95 25.76Q77.95 26.53 77.61 27.06L77.61 27.06 77.61 27.06Q77.28 27.59 76.75 27.85L76.75 27.85 76.75 27.85Q76.22 28.11 75.6 28.11L75.6 28.11 75.6 28.11Q75.17 28.11 74.81 27.95L74.81 27.95 74.81 27.95Q74.44 27.78 74.24 27.49L74.24 27.49 74.24 27.49Q74.04 27.2 74.04 26.77ZM71.18 20.12L72.41 22.57 72.41 22.57Q72.62 22.43 73.16 22.2L73.16 22.2 73.16 22.2Q73.7 21.97 74.42 21.8L74.42 21.8 74.42 21.8Q75.14 21.63 75.89 21.63L75.89 21.63 75.89 21.63Q76.39 21.63 76.77 21.73L76.77 21.73 76.77 21.73Q77.16 21.83 77.43 22.03L77.43 22.03 77.43 22.03Q77.71 22.23 77.83 22.56L77.83 22.56 77.83 22.56Q77.95 22.88 77.95 23.27L77.95 23.27 77.95 30.23 81.43 30.23 81.43 22.43 81.43 22.43Q81.43 21.3 80.76 20.51L80.76 20.51 80.76 20.51Q80.08 19.71 78.94 19.29L78.94 19.29 78.94 19.29Q77.81 18.87 76.32 18.87L76.32 18.87 76.32 18.87Q74.76 18.87 73.45 19.27L73.45 19.27 73.45 19.27Q72.14 19.67 71.18 20.12L71.18 20.12ZM90.02 19.18L82.63 19.18 82.63 22.19 90.02 22.19 90.02 19.18ZM88.08 15.35L84.57 15.35 84.57 30.23 88.08 30.23 88.08 15.35ZM96.98 30.47L96.98 30.47 96.98 30.47Q99.1 30.47 100.56 29.65L100.56 29.65 100.56 29.65Q102.02 28.83 102.91 27.2L102.91 27.2 99.65 26.41 99.65 26.41Q99.26 27.13 98.57 27.49L98.57 27.49 98.57 27.49Q97.87 27.85 96.91 27.85L96.91 27.85 96.91 27.85Q96.1 27.85 95.51 27.47L95.51 27.47 95.51 27.47Q94.92 27.08 94.63 26.37L94.63 26.37 94.63 26.37Q94.34 25.67 94.37 24.66L94.37 24.66 94.37 24.66Q94.37 23.82 94.52 23.21L94.52 23.21 94.52 23.21Q94.68 22.59 94.99 22.19L94.99 22.19 94.99 22.19Q95.3 21.78 95.77 21.57L95.77 21.57 95.77 21.57Q96.24 21.37 96.86 21.37L96.86 21.37 96.86 21.37Q97.49 21.37 97.98 21.66L97.98 21.66 97.98 21.66Q98.47 21.95 98.71 22.46L98.71 22.46 98.71 22.46Q98.95 22.98 98.95 23.72L98.95 23.72 98.95 23.72Q98.95 23.89 98.88 24.12L98.88 24.12 98.88 24.12Q98.81 24.35 98.69 24.56L98.69 24.56 99.55 23.46 92.74 23.46 92.74 25.47 102.84 25.47 102.84 25.47Q102.86 25.28 102.86 25.04L102.86 25.04 102.86 25.04Q102.86 24.8 102.86 24.54L102.86 24.54 102.86 24.54Q102.86 22.76 102.17 21.51L102.17 21.51 102.17 21.51Q101.47 20.27 100.15 19.61L100.15 19.61 100.15 19.61Q98.83 18.95 96.91 18.95L96.91 18.95 96.91 18.95Q95.47 18.95 94.32 19.34L94.32 19.34 94.32 19.34Q93.17 19.74 92.35 20.48L92.35 20.48 92.35 20.48Q91.54 21.23 91.12 22.29L91.12 22.29 91.12 22.29Q90.7 23.36 90.7 24.71L90.7 24.71 90.7 24.71Q90.7 26.46 91.46 27.75L91.46 27.75 91.46 27.75Q92.23 29.05 93.64 29.76L93.64 29.76 93.64 29.76Q95.04 30.47 96.98 30.47Z" className="logo-parts-2" />
                <path d="M33.2 51.86C33.2 52.69 58.29 53.36 89.2 53.36 120.1 53.36 145.2 52.69 145.2 51.86 145.2 51.04 120.1 50.36 89.2 50.36 58.29 50.36 33.2 51.04 33.2 51.86Z" className="logo-parts-2" />
              </g>
            </svg>
          </Link>
        </header>
        <div className="container">

        <Switch>
          <Route exact path="/" component={BlankCanvasWrapper} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/:code" component={ExistingCanvas} />

          <Route path="*" component={NotFoundPage} />
        </Switch>

       </div>
      </Router>
    );
  }
}

export default App;
