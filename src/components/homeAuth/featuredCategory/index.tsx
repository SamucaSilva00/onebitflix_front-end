import useSWR from "swr";
import courseService from "../../../services/courseService";
import styles from '../../../../styles/slideCategory.module.scss'
import SlideComponent from "../../../components/common/slideComponent";

const FeaturedCategory = function () {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <>
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default FeaturedCategory;
