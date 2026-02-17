"use client";

import { Button } from "./ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { GitFork, Star } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { getForks, getStars } from "@/app/actions/stats";

const Topbar = () => {
  const [stars, setStars] = useState<number>(0);
  const [forks, setForks] = useState<number>(0);

  useEffect(() => {
    const fetchRepoStats = async () => {
      const stars = await getStars();
      const forks = await getForks();

      setStars(stars);
      setForks(forks);
    };
    fetchRepoStats();
  }, []);

  const [animatedStars, setAnimatedStars] = useState<number>(0);
  const [animatedForks, setAnimatedForks] = useState<number>(0);

  useGSAP(() => {
    if (!stars) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: stars,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        setAnimatedStars(Math.floor(obj.val));
      },
    });
  }, {});

  useGSAP(() => {
    if (!forks) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: forks,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        setAnimatedForks(Math.floor(obj.val));
      },
    });
  }, {});

  return (
    <>
      <div className="w-full h-15 fixed flex items-center justify-between py-2 px-5 bg-background/25 backdrop-blur-3xl border-b border-border">
        <h1 className="font-bold text-3xl">Konvata</h1>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link
              href={"https://github.com/Fatuousnerd/Konvata"}
              className="text-background!"
            >
              <SiGithub />
              {animatedStars.toLocaleString()}
              <Star />
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={"https://github.com/Fatuousnerd/Konvata"}
              className="text-background!"
            >
              <SiGithub />
              {animatedForks.toLocaleString()}
              <GitFork />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
