function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={120} height={60} {...props}>
      <path
        d="M87.12 34.182c-2.628.015-4.903.646-6.812 1.586-.705-1.395-1.41-2.613-1.527-3.523-.132-1.057-.294-1.703-.132-2.966s.896-3.054.896-3.2c-.015-.132-.16-.778-1.674-.793s-2.82.294-2.966.7a16.86 16.86 0 00-.631 2.246c-.264 1.38-3.024 6.27-4.595 8.838-.514-.998-.954-1.88-1.042-2.584-.132-1.057-.294-1.703-.132-2.966s.896-3.054.896-3.2c-.015-.132-.16-.778-1.674-.793s-2.82.294-2.966.7-.308 1.336-.63 2.246c-.308.9-3.978 9.073-4.933 11.2-.484 1.086-.9 1.953-1.22 2.54s-.015.044-.044.103l-.41.778v.015c-.206.367-.426.72-.53.72-.073 0-.22-.984.03-2.334.543-2.833 1.864-7.252 1.85-7.414 0-.073.25-.85-.85-1.248-1.072-.396-1.453.264-1.54.264s-.16.235-.16.235 1.19-4.977-2.276-4.977c-2.173 0-5.168 2.364-6.65 4.522l-7.487 4.096-.16-.176c-4.2-4.478-11.965-7.65-11.642-13.668.117-2.187.88-7.957 14.916-14.945 11.495-5.725 20.7-4.155 22.3-.66 2.276 4.99-4.918 14.27-16.868 15.606-4.55.514-6.944-1.248-7.546-1.908-.63-.7-.72-.72-.954-.587-.382.206-.147.822 0 1.19.352.925 1.82 2.57 4.316 3.39 2.187.72 7.53 1.116 13.99-1.38C65.496 23 71.148 15.23 69.49 8.725 67.8 2.104 56.82-.068 46.44 3.617 40.26 5.82 33.566 9.254 28.75 13.76c-5.725 5.344-6.636 10.012-6.254 11.95 1.336 6.915 10.864 11.422 14.68 14.754l-.53.294c-1.908.94-9.175 4.742-10.996 8.764-2.055 4.55.323 7.825 1.908 8.265 4.903 1.365 9.924-1.086 12.64-5.124 2.7-4.037 2.378-9.278 1.13-11.67l-.044-.088 1.497-.88a89.3 89.3 0 012.76-1.556c-.47 1.277-.807 2.79-.984 4.99-.206 2.584.85 5.93 2.246 7.252.617.573 1.35.587 1.806.587 1.615 0 2.35-1.336 3.156-2.936.998-1.953 1.88-4.213 1.88-4.213s-1.1 6.122 1.908 6.122c1.1 0 2.202-1.424 2.7-2.158v.015s.03-.044.088-.147c.117-.176.176-.28.176-.28v-.03c.44-.763 1.424-2.5 2.892-5.403 1.894-3.73 3.714-8.397 3.714-8.397s.176 1.145.72 3.024c.323 1.116 1.028 2.334 1.57 3.523l-.705.97.015.015c-.352.47-.75.97-1.16 1.468-1.497 1.79-3.288 3.832-3.523 4.42-.28.7-.22 1.204.323 1.615.396.294 1.1.352 1.85.294 1.35-.088 2.3-.426 2.76-.63a9.56 9.56 0 002.378-1.248c1.468-1.086 2.364-2.628 2.276-4.683-.044-1.13-.41-2.246-.866-3.303l.396-.587c2.32-3.39 4.11-7.12 4.11-7.12s.176 1.145.72 3.024c.28.954.837 1.997 1.336 3.024-2.173 1.776-3.538 3.832-4.008 5.182-.866 2.496-.19 3.626 1.086 3.9.573.117 1.395-.147 2.01-.41a9.115 9.115 0 002.54-1.307c1.468-1.086 2.877-2.598 2.804-4.64-.044-.94-.294-1.864-.63-2.745 1.85-.763 4.243-1.204 7.282-.837 6.533.763 7.825 4.845 7.575 6.548s-1.615 2.643-2.07 2.936c-.455.28-.602.382-.558.587.06.308.264.294.66.235.543-.088 3.435-1.395 3.553-4.536.176-4.037-3.656-8.44-10.453-8.397zM36.737 51.167c-2.158 2.364-5.197 3.26-6.49 2.496-1.395-.807-.85-4.287 1.806-6.797 1.615-1.527 3.714-2.936 5.094-3.802l1.336-.807c.088-.06.147-.088.147-.088.103-.06.22-.132.338-.206.984 3.582.044 6.724-2.23 9.205zm15.782-10.732c-.75 1.835-2.334 6.548-3.288 6.283-.822-.22-1.32-3.788-.16-7.31.587-1.776 1.835-3.9 2.57-4.713 1.19-1.32 2.48-1.762 2.804-1.218.382.705-1.453 5.814-1.923 6.96zM65.54 46.66c-.323.16-.617.28-.75.19-.103-.06.132-.28.132-.28s1.63-1.747 2.276-2.554l1.277-1.63v.176c0 2.114-2.026 3.523-2.936 4.096zm10.042-2.3c-.235-.176-.206-.72.587-2.422.308-.675 1.013-1.806 2.23-2.877.147.44.235.866.22 1.263-.015 2.643-1.894 3.626-3.04 4.037z"
        fill="#cf649a"
      />
    </svg>
  );
}

export default SvgComponent;