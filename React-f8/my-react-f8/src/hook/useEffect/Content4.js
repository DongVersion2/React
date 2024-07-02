//ví dụ về tính năng comment or chat
//khi đang ở 1 thì subriece 1
//khi rời khỏi 1 thì unsubrice
//cleanup, xóa rò rỉ bộ nhớ
import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "khóa học 1",
  },
  {
    id: 2,
    name: "khóa học 2",
  },
  {
    id: 3,
    name: "khóa học 3",
  },
];

const Content4 = () => {

  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ( {detail} ) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
        window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Content4;
