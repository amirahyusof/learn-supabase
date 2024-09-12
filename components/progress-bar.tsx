"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type ComponentProps,
  type ReactNode,
  createContext,
  startTransition,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

const ProgressBarContext = createContext<ReturnType<typeof useProgress> | null>(
  null
);

export function useProgressBar() {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error("Need to be inside provider");
  }

  return progress;
}

export function ProgressBar({ className, children }: { className?: string, children: ReactNode }) {
  const progress = useProgress(); 
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const width = useMotionTemplate`${progress.value}%`; 

  return (
    <ProgressBarContext.Provider value={progress}>
      <AnimatePresence onExitComplete={progress.reset}>
        {progress.state !== "complete" && (
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            style={{ width }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed top-0 h-1 z-10",
              progress.state === "initial" && "bg-gray-400",
              progress.state === "in-progress" && "bg-amber-400",
              progress.state === "completing" && "bg-green-400",
              className
            )}
          />
        )}
      </AnimatePresence>

      {children}
    </ProgressBarContext.Provider>
  );
}

export function ProgressBarLink({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  const progress = useProgressBar(); 
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        progress.start(); 

        if (typeof href === "string") {
          startTransition(() => {
            router.push(href.toString());
            progress.done(); 
          });
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

function useProgress() {
  const [state, setState] = useState<
    "initial" | "in-progress" | "completing" | "complete"
  >("initial");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const value = useSpring(0, {
    damping: 25,
    mass: 0.5,
    stiffness: 300,
    restDelta: 0.1,
  });

  useInterval(
    () => {
      // If we start progress but the bar is currently complete, reset it first.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      if (value.get() === 100) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        value.jump(0);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const current = value.get();

      let diff;
      if (current === 0) {
        diff = 15;
      } else if (current < 50) {
        diff = rand(1, 10);
      } else {
        diff = rand(1, 5);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      value.set(Math.min(current + diff, 99));
    },
    state === "in-progress" ? 750 : null
  );

  useEffect(() => {
    if (state === "initial") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      value.jump(0);
    } else if (state === "completing") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      value.set(100);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return value.on("change", (latest) => {
      if (latest === 100) {
        setState("complete");
      }
    });
  }, [value, state]);

  function reset() {
    setState("initial");
  }

  function start() {
    setState("in-progress");
  }

  function done() {
    setState((state) =>
      state === "initial" || state === "in-progress" ? "completing" : state
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { state, value, start, done, reset };
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      tick();

      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}