SELECT * FROM public.otp_tbl
ORDER BY otp_emailid ASC, otp_srno ASC 


SELECT public.otp_save(
	<p_emailid character varying>, 
	<p_otpno character varying>, 
	<p_host character varying>
)