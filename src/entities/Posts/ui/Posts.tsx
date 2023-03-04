import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Posts.module.scss'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getPostsData } from '../model/selectors/getPostsData/getPostsData'

interface PostsProps {
	className?: string
}

export const Posts:React.FC<PostsProps> = memo((props) => {
	const { className } = props
	const postsData = useSelector(getPostsData)

	return (
		<tbody className={classNames(cls.Posts, {}, [className])}>
			{postsData.map(post => (
				<tr key={post.title}>
					<td className={cls.id}>{post.id}</td>
					<td className={cls.title}>{post.title}</td>
					<td className={cls.body}>{post.body}</td>
				</tr>
			))}
		</tbody>
	)
})