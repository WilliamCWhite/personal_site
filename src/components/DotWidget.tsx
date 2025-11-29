export interface DotWidgetProps {
  page: number;
  totalPages: number;
}

function DotWidget({
  page, totalPages
}: DotWidgetProps) {

  let boolArr = [];
  for (let i = 0; i < totalPages; i++) {
    if (i == page) {
      boolArr.push(true);
    }
    else {
      boolArr.push(false);
    }
  }

  const dotArr = boolArr.map((bool) => {
    let classes = "bg-ncomment";
    if (bool) {
      classes = "bg-nyellow"
    }
    return (
      <div className={`${classes} w-1 h-1 rounded-full`}></div>
    )
  })

  return (
    <div className="gap-3 flex items-center justify-center">
      {dotArr}
    </div>
  )
}

export default DotWidget;
