import ImgConsultation from "../../../assets/Rectangle_18_1.jpg";


export interface WorkItem {
  id: string;
  name: string;
  title: string;
  description: string;
  img: string;
  alt?: string;
}

export const WorkList: WorkItem[] = [
  {
    id: "0",
    name: "1 шаг",
    title: "Проводим консультацию",
    description:
      "Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",
    img: ImgConsultation,
    alt: "Консультация",
  },

  {
    id: "1",
    name: "2 шаг",
    title: "Составляем смету",
    description:
      "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.",
    img: "#0",
    alt: "Составляем смету",
  },

  {
    id: "2",
    name: "3 шаг",
    title: "Привлекаем подрядчиков",
    description:
      "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.",
    img: "#0",
    alt: "Привлекаем подрядчиков",
  },

  {
    id: "3",
    name: "4 шаг",
    title: "Инспектируем все этапы работ",
    description:
      "Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель  организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.",
    img: "#0",
    alt: "Инспектируем все этапы работ",
  },
];
