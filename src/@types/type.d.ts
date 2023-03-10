interface Season {
  name: string;
  start: string;
  end: string;
  id: number;
}

interface FestivalServerRespose<T> {
  response: {
    body: {
      items: { item: T[] };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
    header: {
      resultCode: string;
      resultMsg: string;
    };
  };
}
