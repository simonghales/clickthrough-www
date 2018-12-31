// @flow
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { cx } from 'emotion';
import styles from './styles';
import UserAttribute, { UserAttributePlaceholder } from '../UserAttribute/UserAttribute';
import Text, { PlaceholderText } from '../Text/Text';

type Props = {
  title: string,
  description: string,
  userName: string,
  placeholder?: boolean,
};

const PostCard = ({ title, description, userName, placeholder }: Props) => (
  <article>
    <div className={styles.cardWrapperClass}>
      <div className={styles.cardShadowClass} />
      <div className={styles.cardClass}>
        <div className={styles.cardImageClass} />
        <div className={styles.cardInfoClass}>
          <div className={styles.cardTitleWrapperClass}>
            <p
              className={cx(styles.cardTitleClass, {
                [styles.placeholderCardTitleClass]: placeholder,
              })}
            >
              {title}
            </p>
          </div>
          <div
            className={cx(styles.cardDescriptionClass, {
              [styles.placeholderCardDescriptionClass]: placeholder,
            })}
          >
            {!placeholder && (
              <LinesEllipsis
                text={description}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
                component="p"
              />
            )}
          </div>
        </div>
      </div>
    </div>
    <footer className={styles.footerClass}>
      <div>{placeholder ? <UserAttributePlaceholder /> : <UserAttribute name={userName} />}</div>
      <div>{!placeholder && <Text>12 hours ago</Text>}</div>
    </footer>
  </article>
);

PostCard.defaultProps = {
  title: 'Post Title Goes Here',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur, consequuntur dicta dolorem explicabo fugit itaque libero nihil numquam perferendis repudiandae soluta tempore totam, veniam. Commodi exercitationem itaque tempora.`,
  placeholder: false,
};

export default PostCard;

export const PostCardPlaceholder = () => <PostCard title="" userName="" placeholder />;
