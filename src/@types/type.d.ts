interface Season {
  name: string;
  start: string;
  end: string;
  id: number;
}

interface FestivalServerRespose {
  response: {
    body: unknown;
    header: {
      resultCode: string;
      resultMsg: string;
    };
  };
}
