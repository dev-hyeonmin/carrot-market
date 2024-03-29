interface ButtonProps {
    loading?: boolean;
    text: string;
}

export default function Button({
    loading = false,
    text
}: ButtonProps) {
    return (
        <button
            className="primary-btn h-10
            disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
            disabled={loading}>
            {loading ? '로딩중..🤫' : text}
        </button>
    )
}