function Line(props: any) {
  return (
    <svg {...props} class="line" viewBox="0 0 100 1" >
      <line x1="0" y1="0" x2="100" y2="0" stroke="#e0e0e0" stroke-width="0.5" />
    </svg>
  );
}

export default Line;
