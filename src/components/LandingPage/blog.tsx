import React from "react"

const blogCards: ICardProps[] = [
    {
        imageSrc: "https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        imageTitle: "title",
        title: "Title 1",
        subtitle: "Vocdoni",
        description: "Discover the technical specifications of Vocdoni's anonymous voting and how we arrived at this design.",
        meta: {
            avatar: "https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            date: "Oct 19, 2022",
            howLongRead: "9 min read"
        },
    }
]

interface ICardMetaProps{
    avatar: string
    date: string
    howLongRead: string
}

interface ICardProps {
    imageSrc: string;
    imageTitle: string
    title: string;
    subtitle: string;
    description: string;
    meta: ICardMetaProps
}


const BlogCard = ({
    imageSrc,
    imageTitle,
    title,
    subtitle,
    description,
    meta,
} : ICardProps) => {
    return (
        <div className="card-demo">
            <div className="card">
                <div className="card__image">
                    <img
                        src={imageSrc}
                        alt={imageTitle}
                        title={imageTitle}/>
                </div>
                <div className="card__body">
                    <h4>{title}</h4>
                    <small>
                        {description}
                    </small>
                </div>
                <div className="card__footer">
                    <button className="button button--primary button--block">Visit</button>
                </div>
            </div>
        </div>
    );
}

const Blog = () => {
    return (
        <>
            {blogCards.map((card, i) =>
                <BlogCard
                    imageSrc={card.imageSrc}
                    imageTitle={card.imageTitle}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    meta={card.meta}
                />)}
        </>
    )
}

export default Blog