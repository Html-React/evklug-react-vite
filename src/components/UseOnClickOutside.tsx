import { useEffect, useCallback, RefObject } from "react";

// Кастомный хук для обработки кликов вне заданного элемента
export const useOnClickOutside = (
  ref: RefObject<HTMLElement>, // RefObject для ссылок на DOM-элементы
  handler: (event: MouseEvent | TouchEvent) => void // Обработчик событий клика или касания
) => {
  // Создаем мемоизированную функцию для обработчика
  const memoizedHandler = useCallback(
    (e: MouseEvent | TouchEvent) => {
      // Если нет текущего рефа или клик произошел внутри элемента, ничего не делаем
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      // В противном случае вызываем переданный обработчик
      handler(e);
    },
    [ref, handler]
  );

  useEffect(() => {
    // Добавляем слушатели событий для mousedown и touchstart (для поддержки мобильных устройств)
    document.addEventListener("mousedown", memoizedHandler);
    document.addEventListener("touchstart", memoizedHandler);

    // Возвращаем функцию очистки, которая удаляет слушатели событий
    return () => {
      document.removeEventListener("mousedown", memoizedHandler);
      document.removeEventListener("touchstart", memoizedHandler);
    };
  }, [memoizedHandler]); // Хук будет перезапускаться только при изменении memoizedHandler
};
