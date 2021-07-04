/**
 *
 * @returns
 */
export default function NavHeader() {
	let isOnPage = window.location.href.split('/');
	isOnPage = isOnPage[isOnPage.length - 1]

	return (
		<nav className="px-10 py-2 bg-sky-700 text-gray-900 shadow-md">
			<div className="mx-auto flex justify-between max-w-screen-xl">
				<a
					href="#"
					className="tracking-tighter font-head text-xl font-bold text-amber-300 my-auto hover:text-amber-100"
				>
					Verasic
				</a>
				<div className="flex gap-1">
					<a
						href="/"
						className={
							isOnPage === ''
								? 'px-5 py-2 text-amber-300 font-medium rounded-lg hover:bg-sky-600'
								: 'px-5 py-2 text-white font-medium rounded-lg hover:bg-sky-600'
						}
					>
						Home
					</a>
					<a
						href="/blog"
						className={
							isOnPage === 'blog'
								? 'px-5 py-2 text-amber-300 font-medium rounded-lg hover:bg-sky-600'
								: 'px-5 py-2 text-white font-medium rounded-lg hover:bg-sky-600'
						}
					>
						Blog
					</a>
					<a
						href="/portfolio"
						className={
							isOnPage === 'portfolio'
								? 'px-5 py-2 text-amber-300 font-medium rounded-lg hover:bg-sky-600'
								: 'px-5 py-2 text-white font-medium rounded-lg hover:bg-sky-600'
						}
					>
						Portfolio
					</a>
					<a
						href="/contact"
						className={
							isOnPage === 'contact'
								? 'px-5 py-2 text-amber-300 font-medium rounded-lg hover:bg-sky-600'
								: 'px-5 py-2 text-white font-medium rounded-lg hover:bg-sky-600'
						}
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
