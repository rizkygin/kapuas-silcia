'use client';
import { useEffect, useState } from 'react';
import './stylesGallery.css';
import Navbar from '../components/Navbar';
import BottomBar from '../components/Bottombar';
import VideoBackground from '../components/VideoBackground';

export default function HomeGallery() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.classList.add('is-active'));
    document.addEventListener(
      'mouseenter',
      (event) => {
        if (event.target instanceof HTMLElement) {
          const card = event.target.closest('.card');
          if (card) {
            cards.forEach((c) => c.classList.remove('is-active'));
            card.classList.add('is-active');
          }
        }
      },
      true
    );

    document.addEventListener(
      'mouseleave',
      (event) => {
        if (event.target instanceof HTMLElement) {
          const card = event.target.closest('.card');
          if (card) {
            cards.forEach((c) => c.classList.add('is-active'));
          }
        }
      },
      true
    );
  }, []);

  // Add "is-active" class to all cards initially

  // Use event delegation for better performance

  return (
    <main className="">
      <Navbar />
      <VideoBackground src={'company.mp4'} />
      <div className="flex w-full justify-center items-center">
        <span
          className="text-white"
          style={{
            fontFamily: 'Yanone Kaffeesatz',
            fontSize: '6rem',
          }}
        >
          Gallery of Us
        </span>
      </div>
      <div className="container">
        <div className="card">
          <div className="card__inner flex ">
            <div className="w-full rounded-3xl">
              <img
                src="https://picsum.photos/id/41/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/42/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/33/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/24/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/25/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/26/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/27/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/28/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/29/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__inner">
            <div className="w-full">
              <img
                src="https://picsum.photos/id/22/800/800"
                alt=""
                className="h-96 rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-50"></div>
      <div className="flex flex-col px-10 md:px-20 h-screen">
        <div className="text-xs md:text-lg w-full flex h-200">
          <div className="w-2/3 text-white">
            <h1 className="text-3xl">Hello World</h1>
            <p className="text-justify px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className="w-1/3 rounded-3xl">
            <img
              className="object-cover h-100 md:h-70 rounded-3xl transition-all hover:cursor-pointer hover:scale-150 duration-150 "
              src="https://picsum.photos/id/41/800/800"
              alt=""
            />
          </div>
        </div>
        <div className="text-xs md:text-lg w-full flex h-200">
          <div className="w-1/3 rounded-3xl">
            <img
              className="object-cover h-100 md:h-70 rounded-3xl transition-all hover:cursor-pointer hover:scale-150 duration-150 "
              src="https://picsum.photos/id/52/800/800"
              alt=""
            />
          </div>
          <div className="w-2/3 text-white">
            <h1 className="text-3xl">Hello World</h1>
            <p className="text-justify px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="min-h-100"></div>    
      </div>
      <BottomBar />
    </main>
  );
}
