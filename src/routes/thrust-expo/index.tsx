export const ThrustExpo = () => {
    return (
        <div>
            <ParamGrid
                params={mainParams}
                paramMap={paramMap}
                isLoading={isParamGridLoading}
            />
            {/* ... rest of component ... */}
        </div>
    );
}; 