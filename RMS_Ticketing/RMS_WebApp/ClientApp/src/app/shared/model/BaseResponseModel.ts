export class BaseResponse {
  public Success: boolean;
  public Message: string;
  public UserToken: AccessTokenResponse;
} 

export class BaseResponseWithData<T> extends BaseResponse {
    public Entity: T;
}


export class AccessTokenResponse {
  
  public AccessToken: string;

  public TokenType: string;

  public ExpiresIn: number;

  public Issued: Date;

  public Expires: Date;

  public RefreshToken: string;
 }
