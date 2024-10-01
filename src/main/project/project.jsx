import stylesGlobal from "../../style/main/Global.module.css";
import styles from "../../style/main/Project.module.css";
import { ImageSlider } from "../project/ImageSlider";


export function Project() { 
  return (
    <section className={`${styles.project} ${stylesGlobal.container}`}>
        <div className={styles.project_container}>
            <h1 className={styles.prject_header}>
                Проектные решения любой сложности
            </h1>
            <p className={styles.project_text}>
                Есть над чем задуматься: базовые сценарии поведения пользователей
                и по сей день остаются уделом проектантов
            </p>
            <button className={`${styles.btn} ${styles.project_btn}`} type="button">
            Заказать расчёт
            </button>        
        </div>  
        <ImageSlider />
    </section>
  );
}