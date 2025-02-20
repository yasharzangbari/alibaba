import React, {
  ComponentType,
  LazyExoticComponent,
  useEffect,
  useState,
} from "react";

type Props<T> = {
  fallback: JSX.Element;
  component: LazyExoticComponent<ComponentType<any>>;
  data: T;
};

function ClientOnly<T>({ fallback, component, data }: Props<T>) {
  const [LoadedComponent, setLoadedComponent] =
    useState<ComponentType<any> | null>(null);

  useEffect(() => {
    setLoadedComponent(() => component);
  }, [component]);

  return (
    <React.Suspense fallback={fallback}>
      {LoadedComponent ? <LoadedComponent data={data} /> : fallback}
    </React.Suspense>
  );
}

export { ClientOnly };
